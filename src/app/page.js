import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <div>
         <div className="text-[17vw] font-black">thinK Great</div>
         <div className="relative">
          <Image src="/images/intro.avif" alt="" width={1300} height={1300} className="w-full h-[500px] object-cover" />
          <div className="absolute left-5 bottom-10 flex flex-col gap-2">
            <span className="text-white text-lg font-bold">KB그룹</span>
            <strong className="text-white text-3xl font-bold">KB그룹광고 <br /> 드디어 TV방송에서 <br />만나다.</strong>
          </div>
         </div>
        </div>
      </section>

      <section>
        <div>
          <ul>
            <li>
              <Link href="#">
                <Image src="/images/media-1.avif" alt="" width={1300} height={1300} className="w-full aspect-video object-cover" />
                <span className="text-md text-gray-500">소셜미디어</span>
                <strong className="text-xl">소통과 화합의 현장! KG모빌리티 파트너스 데이</strong>
              </Link>
            </li>
          </ul>
        </div>
      </section>


    </div>
  );
}
