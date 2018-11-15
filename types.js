import { gql } from 'apollo-server-express'
import factsjson from "./public/factbook.json"

const data = factsjson

const typedefs = gql`

type Query {
	test_query: Test
}
type Test {
	test_field_1: String
	test_field_2: Int
	test_field_3: Boolean
}
{
	type nation {
		name
		introduction
	}
}

`;
console.log(data)
export default typedefs