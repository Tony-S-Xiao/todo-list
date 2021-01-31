let taskFactory = (() => {
    const createTask = (title = '', description = '', due_date = new Date(), priority = 0) => {
        return (()=>{
            let title_ = title;
            let description_ = description;
            let dueDate_ = due_date;
            let priority_ = priority;
            return {
                get description() {
                    return description_;
                },
                get title() {
                    return title_;
                },
                get dueDate() {
                    return dueDate_;
                },
                get priority() {
                    return priority_;
                },
                set description(description) {
                    description_ = description;
                },
                set title(title) {
                    title_ = title;
                },
                set dueDate(due_date) {
                    dueDate_ = due_date;
                },
                set priority(priority) {
                    priority_ = priority;
                }
            }
        })();
    };
    return {createTask};
})();
export default taskFactory;