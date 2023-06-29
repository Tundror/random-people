import { Request, Response } from "express";
import db from "../database/db.connection";
import { randomNumber } from "../services/randomNumber.services";

export async function getPeople(req: Request, res: Response) {
  try {
    const countQuery = await db.query(`SELECT COUNT(*) AS total_records FROM people;`);
    const totalRecords:number = parseInt(countQuery.rows[0].total_records);

    const number:number = randomNumber(totalRecords)

    const query = `SELECT * FROM people WHERE id = $1;`;
    const result = await db.query(query, [number]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }

    return res.status(200).json(result.rows[0]);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

