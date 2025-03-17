import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  currentPage = 1;
  itemsPerPage = 5;
  pageOptions = [5, 10, 20];
  isMobile = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  changeItemsPerPage(event: Event): void {
    const newSize = Number((event.target as HTMLSelectElement).value);
    this.itemsPerPage = newSize;
    this.currentPage = 1; // Reseta para a primeira página ao alterar o tamanho
  }

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current > 4) {
        pages.push("...");
      }
      for (let i = Math.max(2, current - 2); i <= Math.min(total - 1, current + 2); i++) {
        pages.push(i);
      }
      if (current < total - 3) {
        pages.push("...");
      }
      pages.push(total);
    }
    return pages;
  }

  getStatusClass(status: string): string {
    return status === 'Concluído' || status === 'Cancelado' ? 'status' : '';
  }
}
