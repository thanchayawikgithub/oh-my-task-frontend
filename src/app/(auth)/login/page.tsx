import { SignInButton } from '@/components/auth';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Oh My Task!</h1>
          <p className="text-gray-600">Manage your tasks efficiently</p>
        </div>
        <SignInButton />
      </div>
    </main>
  );
}
