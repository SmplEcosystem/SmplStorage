import { Injectable } from "@angular/core"
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection, CapacitorSQLitePlugin,
  capSQLiteUpgradeOptions, capSQLiteResult, capSQLiteValues} from '@capacitor-community/sqlite';

export class SqliteService {
  sqLiteConnection: SQLiteConnection;
  isService: boolean = false;
  platform: string;
  sqlitePlugin: CapacitorSQLitePlugin;
  native: boolean = false;

  constructor() {
    this.platform = Capacitor.getPlatform();
    this.sqlitePlugin = CapacitorSQLite;
    this.sqLiteConnection = new SQLiteConnection(CapacitorSQLite);
  }

  async initializePlugin(): Promise<boolean> {
    this.platform = Capacitor.getPlatform();
    if(this.platform === 'ios' || this.platform === 'android') this.native = true;
    this.sqlitePlugin = CapacitorSQLite;
    this.sqLiteConnection = new SQLiteConnection(this.sqlitePlugin);
    this.isService = true;
    return true;
  }

  async openDatabase(dbName:string, encrypted: boolean, mode: string, version: number, readonly: boolean): Promise<SQLiteDBConnection> {
    let db: SQLiteDBConnection;
    const retCC = (await this.sqLiteConnection.checkConnectionsConsistency()).result;
    let isConn = (await this.sqLiteConnection.isConnection(dbName, readonly)).result;
    if(retCC && isConn) {
      db = await this.sqLiteConnection.retrieveConnection(dbName, readonly);
    } else {
      db = await this.sqLiteConnection
        .createConnection(dbName, encrypted, mode, version, readonly);
    }
    await db.open();
    return db;
  }

  async retrieveConnection(dbName: string, readonly: boolean): Promise<SQLiteDBConnection> {
    return await this.sqLiteConnection.retrieveConnection(dbName, readonly);
  }
  async closeConnection(database: string, readonly?: boolean): Promise<void> {
    const readOnly = readonly ? readonly : false;
    return await this.sqLiteConnection.closeConnection(database, readOnly);
  }
}
