import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import middlewares from './middlewares'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {

    if (!to.meta.middlewares) {
        return next()
    }

    const assignedMiddlewares: string[] = to.meta.middlewares as string[]

    assignedMiddlewares.forEach((middleware) => {
        middlewares[middleware]({ to, from, next })
    });

    return next()
})


export default router