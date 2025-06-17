import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Home } from "../../page-components/Home/Home"

describe('page-component/Home', () => {
    test('Renders fine with no props', () => {
        const {  container } = render(
            <Home />
        )
        expect(container.firstChild).not.toBeNull();
    })
})