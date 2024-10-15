import RegisterCard from '@/src/components/register/register-card'
 
function RegisterPage() {
  return (
    <>
      <div className="bg-gray-100 h-full">
        <div className="w-full h-full grid place-items-center py-10">
          <RegisterCard></RegisterCard>
        </div>
      </div>
    </>
  )
}
 
export default RegisterPage