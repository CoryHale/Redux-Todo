export const SUBMIT_TODO = "SUBMIT_TODO";

export function submitTodo(todo) {
    console.log("actions/index.js: submitTodo: todo: ", todo);
    return {
        type: SUBMIT_TODO,
        payload: todo
    }
}