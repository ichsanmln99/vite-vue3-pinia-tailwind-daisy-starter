import { RouteLocationNormalized } from 'vue-router'

export interface MiddlewareInterface {
    from?: RouteLocationNormalized,
    to?: RouteLocationNormalized,
    next: Function
}