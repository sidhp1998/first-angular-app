import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  get<T>(key: string, defaultValue: T): T {
    const stored = localStorage.getItem(key);
    if (stored === null) {
      return defaultValue;
    }
    return JSON.parse(stored) as T;
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
