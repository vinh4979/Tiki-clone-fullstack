import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import Input from 'src/components/Input'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import { Helmet } from 'react-helmet-async'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='min-h-[600px] bg-[#F5F5FA]'>
 
      <Helmet>
        <title>Đăng nhập | Tiki Clone</title>
        <meta name='description' content='Đăng nhập vào dự án Tiki Clone' />
      </Helmet>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-[100px]'>
          <div className='lg:col-span-2 lg:col-start-2'>
            <div className='text-[28px] text-[#242424]'>Xin chào,</div>
            <div className='mt-3 text-base text-[#808089]'>Đăng nhập hoặc Tạo tài khoản</div>
          </div>
          <div className='lg:col-span-2 lg:col-start-2 mt-[30px]'>
            <form className='rounded-sm bg-white p-8 shadow-sm' onSubmit={onSubmit} noValidate>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-2'
                errorMessage={errors.email?.message}
                placeholder='Số điện thoại hoặc email'
                classNameInput='w-full rounded-sm border border-[#DDDDE3] px-4 py-3 text-[#242424] outline-none focus:border-[#0B74E5] focus:shadow-sm'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-3'
                classNameEye='absolute right-[15px] h-5 w-5 cursor-pointer top-[14px] text-[#808089]'
                errorMessage={errors.password?.message}
                placeholder='Mật khẩu'
                classNameInput='w-full rounded-sm border border-[#DDDDE3] px-4 py-3 text-[#242424] outline-none focus:border-[#0B74E5] focus:shadow-sm'
                autoComplete='on'
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-sm bg-[#1A94FF] py-3 px-2 text-base font-medium text-white hover:opacity-90 disabled:opacity-70'
                  isLoading={loginMutation.isPending}
                  disabled={loginMutation.isPending}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-sm text-[#808089]'>Chưa có tài khoản?</span>
                <Link className='ml-2 text-sm font-medium text-[#1A94FF] hover:opacity-90' to='/register'>
                  Tạo tài khoản
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
