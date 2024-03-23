import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-neutral-800 p-5">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근당근</h1>
        <h2 className="text-2xl">
          당근당근은 당신의 동네에서 거래하는 당신의 마켓입니다.
        </h2>
      </div>
      <div />
      <div className="flex w-full flex-col items-center gap-3">
        <Link
          href="/create-account"
          className="w-full rounded-md bg-orange-500 py-2.5 text-center text-lg font-medium text-white transition-colors hover:bg-orange-400"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
