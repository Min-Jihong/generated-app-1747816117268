import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Button, Input } from '@shadcn/ui'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async (data: { username: string; password: string }) => {
    console.log(data)
    // Here you would generally call an authentication API.
    // If successful:
    router.push('/dashboard')
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <Input {...register('username')} placeholder='Username' />
        <Input {...register('password')} type='password' placeholder='Password' />
        <Button type='submit'>Log in</Button>
      </form>
    </motion.div>
  )
}