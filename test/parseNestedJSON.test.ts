import { parseNestedJSON } from '../src'

describe('parseNestedJSON', () => {
  it('parses a JSON object string', () => {
    const received = parseNestedJSON('{"a":1}')
    expect(received).toEqual({ a: 1 })
  })

  it('parses nested JSON strings in objects', () => {
    const received = parseNestedJSON({ a: '{"b":"[1,2]"}' })
    expect(received).toEqual({ a: { b: [1, 2] } })
  })

  it('parses arrays containing JSON strings', () => {
    const received = parseNestedJSON(['{"a":1}', '[2,3]', 'true'])
    expect(received).toEqual([{ a: 1 }, [2, 3], true])
  })

  it('leaves invalid JSON strings unchanged', () => {
    const received = parseNestedJSON('{a:1}')
    expect(received).toEqual('{a:1}')
  })

  it('leaves primitive values unchanged', () => {
    expect(parseNestedJSON(null)).toEqual(null)
    expect(parseNestedJSON(1)).toEqual(1)
    expect(parseNestedJSON(false)).toEqual(false)
  })
})
