export interface ICurrentShowData {
  name: string,
  image:{medium:string},
  network:{name:string},
  rating:{average:number},
  runtime: number,
  premiered: string,
  ending: string,
  summary: string,
<<<<<<< HEAD
  schedule:{time: string, [days:string]:any},
  genres: [string]
  

=======
  schedule:{time: string, days:string},
  genres: string
>>>>>>> 784970ee277d1d344b0b4ba8b626ae06323327df
}
