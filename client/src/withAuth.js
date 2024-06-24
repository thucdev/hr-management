import axios from "axios"
import React, { Component } from "react"
import { Redirect } from "react-router-dom"

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super()
            this.state = {
                isAuthenticated: false,
                loading: true,
                redirect: false,
            }
        }

        componentDidMount() {
            // const data = {
            //     role: "ROLE_ADMIN",
            // }
            // localStorage.setItem("user", JSON.stringify(data))
            // this.setState({ loading: false })
            // return true
            let token = localStorage.getItem("token")
            axios({
                method: "get",
                url: "/checkToken",
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => {
                    this.setState({ isAuthenticated: true })
                    console.log(`Access: ${this.state.isAuthenticated}`)
                    localStorage.setItem("user", JSON.stringify(res.data.authData.user))
                    this.setState({ loading: false })
                })
                .catch((err) => {
                    console.log(err)
                    console.log(`Access: ${this.state.isAuthenticated}`)
                    // localStorage.removeItem('user')
                    // localStorage.removeItem('token')
                    this.setState({ loading: false, redirect: true })
                })
        }

        render() {
            const { loading, redirect } = this.state
            if (loading) {
                return null
            }
            if (redirect) {
                return <Redirect to='/login' />
            }
            return <ComponentToProtect {...this.props} />
        }
    }
}
