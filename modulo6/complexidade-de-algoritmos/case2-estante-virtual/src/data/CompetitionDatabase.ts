import { Competition } from "../model/competition";
import { UpdateCompetitionInput } from "../types/UpdateCompetitionInput";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
  protected TABLE_NAME: string = "competition";

  public async create(competition: Competition): Promise<void> {
    try {
      await this.connection(this.TABLE_NAME).insert({
        id: competition.getId(),
        name: competition.getName(),
        date: competition.getDate(),
        status: competition.getStatus(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async getCompetitionById(id: string): Promise<Competition> {
    try {
      const [result] = await this.connection(this.TABLE_NAME).where("id", id);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async updateStatus(input: UpdateCompetitionInput): Promise<void> {
    try {
      const { id, status } = input;
      switch (status) {
        case "close" || "Close":
          await this.connection(this.TABLE_NAME)
            .update("status", "close" || "Close")
            .where("id", id);
        break;
        case "Close":
          await this.connection(this.TABLE_NAME)
            .update("status", "Close")
            .where("id", id);
        break;
        case "open":
          await this.connection(this.TABLE_NAME)
            .update("status", "open" || "Open")
            .where("id", id);
        break;
        case "Open":
            await this.connection(this.TABLE_NAME)
              .update("status", "Open")
              .where("id", id);
        break;
      }
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async getCompetitionByName(name: string): Promise<Competition> {
    try {
      const [result] = await this.connection(this.TABLE_NAME).where(
        "name",
        name
      );

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async getStatus(name: string): Promise<Competition[]> {
    try {
      const [result] = await this.connection(this.TABLE_NAME)
        .where("status", "Open")
        .andWhere("name", name);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}