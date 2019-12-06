import {JwtStrategy} from "./jwt.strategy";
import {LocalStrategy} from "./local.strategy";

export const STRATEGIES = [ LocalStrategy, JwtStrategy];