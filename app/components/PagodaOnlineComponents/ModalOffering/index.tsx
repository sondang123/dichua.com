import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { AppResource } from '~/const/AppResource'
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Vui lòng nhập họ và tên !',
  }),
  money: z.string().min(2, {
    message: 'Vui lòng nhập số tiền !',
  }),
  address: z.string().min(2, {
    message: 'Vui lòng nhập địa chỉ !',
  }),
})
interface typeProps {
  handleSubmit?: (values: z.infer<typeof formSchema>) => void
}
export const ModalOffering: React.FC<typeProps> = ({ handleSubmit }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      money: '',
      address: '',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    if (handleSubmit) {
      handleSubmit(values)
    }
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-center">Công đức</DialogTitle>
      </DialogHeader>{' '}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập họ và tên..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />{' '}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập địa chỉ..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="money"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tiền công đức</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập số tiền" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-12 ">
            <img
              src={AppResource.images.img_qr}
              alt=""
              className="mx-auto mt-2 w-[50%]"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
