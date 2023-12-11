import { render } from "@testing-library/vue";
import MyComponent from "./MyComponent.vue";

test("it should work", () => {
    const { getByText } = render(MyComponent, {
        props: {
            title: "hello",
        },
    });

    // assert output
    getByText("hello");
});
