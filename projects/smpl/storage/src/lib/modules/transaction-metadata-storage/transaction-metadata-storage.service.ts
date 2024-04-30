import { Injectable } from '@angular/core';
import {SqliteService} from './sqlite.service';
import {WithdrawalRequestDto} from "./withdrawal-request-dto";
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection, CapacitorSQLitePlugin,
  capSQLiteUpgradeOptions, capSQLiteResult, capSQLiteValues} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class TransactionMetadataStorageService {
  private database!: SQLiteDBConnection;

  constructor(
    private sqliteService: SqliteService
  ) {
    this.initializeDatabase();
  }

  async postWithdrawalMetadata(withdrawalMetadata: WithdrawalRequestDto): Promise<void> {
  }

  async initializeDatabase(): Promise<void> {
    this.database = await this.sqliteService.openDatabase(
      'databaseName',
      false,
      'full',
      1,
      false
    );
  }

  async saveWithdrawalMetadata(withdrawalMetadata: WithdrawalRequestDto): Promise<void> {
    const sql = 'INSERT INTO withdrawal_metadata (column1, column2) VALUES (?, ?)';
    try {
      await this.database.run(sql, [withdrawalMetadata.hash, withdrawalMetadata.withdrawalType]);
      console.log("Metadata saved successfully");
    } catch (error) {
      console.error("Failed to save metadata:", error);
    }
  }

}
