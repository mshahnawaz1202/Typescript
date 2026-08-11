import { useEffect, useState } from "react";

interface fetchState<T> {
    data: T | null,
    loading: boolean,
    error: string | null
}

export function useFetch<T>(url: string): fetchState<T> {
    const [state, setState] = useState<fetchState<T>>({
        data: null,
        loading: true,
        error: null
    })

    //* useEffect to make fetch request





    return state

}
