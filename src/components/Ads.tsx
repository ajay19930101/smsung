import { Star } from 'lucide-react';

export default function Alternatif() {
  return (
    <div>
        <div className='flex justify-between mb-6'>

        <h1 className='flex justify-center items-center text-xl font-samsung700 text-center'>Mencari Alternatif?</h1>
        <div className="space-x-2">
			<button className="border-2 rounded-full" >
			  <span className="hidden">Previous</span>
			  <svg className="icon" focusable="false" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" data-di-res-id="86d77d5d-e3d537d9" data-di-rand="1752058792026">
			    <g transform="translate(40 40) rotate(180)">
			      <path d="M21.47,16.53A.75.75,0,0,1,22.53,15.47l4,4a.75.75,0,0,1,0,1.061l-4,4A.75.75,0,0,1,21.47,23.47l2.72-2.72H14.5a.75.75,0,0,1,0-1.5h9.689Z"></path>
			    </g>
			  </svg>
			</button>
		    <button className="border-2 rounded-full" >
		      <span className="hidden">Next</span>
		      <svg className="icon" focusable="false" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" data-di-res-id="1b881876-ea03265c" data-di-rand="1752058792026">
		        <path d="M21.47,16.53A.75.75,0,0,1,22.53,15.47l4,4a.75.75,0,0,1,0,1.061l-4,4A.75.75,0,0,1,21.47,23.47l2.72-2.72H14.5a.75.75,0,0,1,0-1.5h9.689Z"></path>
		      </svg>
		    </button>
		</div>
        </div>
    <div className="overflow-x-auto whitespace-nowrap scroll-smooth">
  <div className="inline-flex gap-4">
    
    <div className="w-[204px] flex-shrink-0 bg-white rounded-lg">
      <div className="aspect-square bg-[#f7f7f7] rounded overflow-hidden h-[180px]  flex justify-center items-center flex-col">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a266bzkhxid/gallery/id-galaxy-a26-5g-sm-a266-sm-a266bzkhxid-thumb-545664764?$144_144_PNG$" alt="Galaxy A26 5G" className="w-[120px] object-cover" />
      </div>
      <div className='flex flex-col space-y-3 text-sm font-samsung700'>

      <p className="text-sm font-semibold mt-2 truncate text-base">Galaxy A26 5G</p>
      <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">(4.5)</span>
                <span className="text-sm">(4)</span>
              </div>
      <p className="text-sm font-bold mt-1">Rp 3.999.000</p>
        </div>
    </div>

    <div className="w-[204px] flex-shrink-0 bg-white rounded-lg">
      <div className="aspect-square bg-[#f7f7f7] rounded overflow-hidden h-[180px]  flex justify-center items-center flex-col">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a165fzkhxid/gallery/id-galaxy-a16-sm-a165-sm-a165fzkhxid-thumb-544306717?$144_144_PNG$" alt="Galaxy A16" className="w-[120px] object-cover" />
      </div>
      <div className='flex flex-col space-y-3 text-sm font-samsung700'>
      <p className="font-semibold mt-2 truncate text-base">Galaxy A16</p>
      <div className="flex items-center space-x-1 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">(4.3)</span>
                <span className="text-sm">(15)</span>
              </div>
      <p className="text-sm font-bold mt-1">Rp 3.199.000</p>
      </div>
    </div>

    <div className="w-[204px] flex-shrink-0 bg-white rounded-lg">
      <div className="aspect-square bg-[#f7f7f7] rounded overflow-hidden h-[180px]  flex justify-center items-center flex-col">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a065fzkhxid/gallery/id-galaxy-a06-sm-a065-519892-sm-a065fzkhxid-thumb-545082628?$144_144_PNG$" alt="Galaxy A06" className="w-[120px] object-cover" />
      </div>
      <div className='flex flex-col space-y-3 text-sm font-samsung700'>

      <p className="text-sm font-semibold mt-2 truncate text-base">Galaxy A06</p>
      <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">(4.9)</span>
                <span className="text-sm">(177)</span>
              </div>
      <p className="text-sm font-bold mt-1">Rp 1.299.000</p>
      </div>
    </div>
    <div className="w-[204px] flex-shrink-0 bg-white rounded-lg">
      <div className="aspect-square bg-[#f7f7f7] rounded overflow-hidden h-[180px]  flex justify-center items-center flex-col">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a065fzkhxid/gallery/id-galaxy-a06-sm-a065-519892-sm-a065fzkhxid-thumb-545082628?$144_144_PNG$" alt="Galaxy A06" className="w-[120px] object-cover" />
      </div>
      <div className='flex flex-col space-y-3 text-sm font-samsung700'>

      <p className="text-sm font-semibold mt-2 truncate text-base">Galaxy A36 5G</p>
      <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">(4.8)</span>
                <span className="text-sm">(73)</span>
              </div>
      <p className="text-sm font-bold mt-1">Rp 5.199.000</p>
      </div>
    </div>
  </div>
    </div>
</div>

  );
}
