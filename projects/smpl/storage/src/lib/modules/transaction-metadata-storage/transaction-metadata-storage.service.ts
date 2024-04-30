import { Injectable } from '@angular/core';
import {SqliteService} from './sqlite.service';
import {WithdrawalRequestDto} from "./withdrawal-request-dto";

@Injectable({
  providedIn: 'root'
})
export class TransactionMetadataStorageService {
  private database: SQLiteDBConnection;

  constructor(
    private sqliteService: SqliteService
  ) {
    this.initalizeDatabhase();
  }

  async postWithdrawalMetadata(withdrawalMetadata: WithdrawalRequestDto): Promise<void> {
  }

  async initializeDatabase(): Promise<void> {
    this.database = await this.sqliteService.openDatabase({
      dbName: 'databaseName',
      encrypted: false,
      mode: 'full',
      version: 1,
      readonly: false
    });
  }

  saveWithdrawalMetadata(withdrawalMetadata: WithdrawalRequestDto): void {
    this.database.save('withdrawal_metadata', withdrawalMetadata).catch(error => console.error('Failed to save metadata'. error));
  }

}
