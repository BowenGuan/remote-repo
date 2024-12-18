import {ref, toValue, watchEffect} from "vue";

export function useFetch(url, option = {}) {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const fetchData = () => {
        data.value = null;
        error.value = null;
        loading.value = true;
        fetch(toValue(url), option)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200){
                    data.value = json.data
                }else {
                    error.value = json.errMsg
                }
            })
            .catch(err => {error.value = err})
            .finally(() => {loading.value = false})

    }
    watchEffect(() => {
        fetchData()
    })
    return { data, error, loading }
}