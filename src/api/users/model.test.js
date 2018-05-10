import { Users } from '.'

let users

beforeEach(async () => {
  users = await Users.create({})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = users.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(users.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = users.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(users.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
