import {UserController} from "./http/user-controller";
//import {MongoUserRepository} from "./mongo-user-repository";
import {UserByIdFinder} from "../application/user-by-id-finder";
import {ElasticUserRepository} from "./user-repository/elastic-user-repository";


//const mongoUserRepository = new MongoUserRepository()
const elasticUserRepository: ElasticUserRepository = new ElasticUserRepository()
const userByIdFinder = new UserByIdFinder(elasticUserRepository)

export const userController = new UserController(userByIdFinder)