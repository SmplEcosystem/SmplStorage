import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  smplWalletUiPath: string = 'https://localhost:4200';

  constructor() { }
}
