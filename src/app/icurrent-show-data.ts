export interface ICurrentShowData {
  name: string,
  image:{medium:string},
  network:{name:string},
  rating:{average:number},
  runtime: number,
  premiered: string,
  ending: string,
  summary: string,
  schedule:{time: string, days:string},
  genres: string
}
