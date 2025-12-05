import { DataSource } from "typeorm";
import { Board } from "./board.postgres";
import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const types = `#graphql
  type MyBoard {
    number: Int
    writer: String
    title: String
    content: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    createBoard(writer: String, title: String, content: String): String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    // ⬇️ 이름을 스키마와 동일하게 단수형으로 변경
    createBoard: async (_parent: any, args: any) => {
      await Board.insert({
        writer: args.writer,
        title: args.title,
        content: args.content,
      });
      return "등록에 성공했어요!";
    },
  },
};

const server = new ApolloServer({ typeDefs: types, resolvers });
startStandaloneServer(server, {
  context: async () => ({ dataSource: 내DB연결설정 }),
});

const 내DB연결설정 = new DataSource({
  type: "postgres",
  host: "34.64.158.127",
  port: 5010,
  username: "postgres",
  password: "postgres2025",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

내DB연결설정
  .initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");

    // DB접속해 놓고, 24시간 작동하자!
    startStandaloneServer(server).then(({ url }) => {
      console.log(
        `그래프큐엘 백엔드서버가 정상적으로 실행되었습니다. URL: ${url}`
      ); // 포트: 4000
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
