'use client'
import { useEffect, useState } from 'react'
import './style.css'
import {useRouter} from "next/router";


export default function Home() {

    const router = useRouter()

    const ToSignIn = () => {
        router.push('/')
    }

    const ReturnBack = () => {
        router.push('/')
    }

    return (
     <div></div>
    );
}
