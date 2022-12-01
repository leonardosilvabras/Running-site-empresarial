import axios from 'axios'

import Userfront from '@userfront/react'

Userfront.init('9ny8dvbd')

const accessToken = Userfront.accessToken()

const api = axios.create({
    baseURL: '/api'
})

export default api

export const deleteItem = (slug) => {
    axios
        .delete(`/routes/project${slug}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res=> {
            console.log("Resultado", res)
            return res;
        })
        .catch(e=>{
            console.log("Erro", e)
            return e;
        })
}

export const editItem = (slug, {title,description,longDescription, image, technologies}) => {
    axios
        .patch(`/routes/project${slug}`, {
            title, description, longDescription, image, technologies
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res=> {
            console.log("Alterado com sucesso", res)
            return res
        })
        .catch(e=> {
            console.log("Erro", e)
            return e
        })
}

export const addItem = ({title, image, description}) => {
    axios
        .post(`/routes/project`, {
            title, image, description,  
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res=> {
            console.log("Adicionado com sucesso", res)
            return res
        })
        .catch(e=> {
            console.log("Erro", e)
            return e
        })
}
