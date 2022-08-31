import { MiddlewareInterface } from "../types/middleware.interface"

const isAdmin = function ({ next }: MiddlewareInterface) {
    if (false) {
        return next('404')
    }
}

export default isAdmin