import type { Selectable } from 'kysely'
import { db } from './index.js'
import type { DB } from './types.js'

type Person = DB['Person']
export const findOneById = (id: number) =>
    db.selectFrom('Person').where('id', '=', id).selectAll().executeTakeFirst()

export const search = async (
    criteria: Partial<Pick<Selectable<Person>, 'id' | 'name' | 'gender'>>,
) => {
    let query = db.selectFrom('Person')
    if (criteria.id) {
        query = query.where('id', '=', criteria.id)
    }
    if (criteria.name) {
        query = query.where('name', '=', criteria.name)
    }
    if (criteria.gender) {
        query = query.where('gender', '=', criteria.gender)
    }
    return await query.selectAll().execute()
}

console.log("start")
search({ name: 'Tanaka' }).then((res)=>{
    console.log("end")
    console.log(res)
}).catch((e)=>{console.log})