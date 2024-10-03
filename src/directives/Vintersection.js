// переиспользование функционала - директива
export default {
    mounted(el, binding) {
        // автоподгрузка, когда доходим до контейнера с классом "observer"
        let options = {
            // root: document.querySelector("#scrollArea"), // по умолчанию - окно браузера, поэтому удаляем строку
            rootMargin: "0px",
            threshold: 1.0,
        };

        let callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value();
            }
        };
        let observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}