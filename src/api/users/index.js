import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show, update, destroy } from './controller'
export Users, { schema } from './model'

const router = new Router()

/**
 * @api {post} /user Create users
 * @apiName CreateUsers
 * @apiGroup Users
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */
router.post('/',
  create)

/**
 * @api {get} /user Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup Users
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /user/:id Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup Users
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /user/:id Update users
 * @apiName UpdateUsers
 * @apiGroup Users
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */
router.put('/:id',
  update)

/**
 * @api {delete} /user/:id Delete users
 * @apiName DeleteUsers
 * @apiGroup Users
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Users not found.
 */
router.delete('/:id',
  destroy)

export default router
