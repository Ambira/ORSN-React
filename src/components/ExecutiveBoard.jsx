// ExecutiveBoard.jsx
import govinda  from '../assets/images/govinda.jpg'
import krishna  from '../assets/images/krishna.jpg'
import bijay    from '../assets/images/bijay.jpg'
import saroj    from '../assets/images/Saroj.jpg'
import satya    from '../assets/images/satya.jpg'
import sunity   from '../assets/images/sunity.jpg'
import raju     from '../assets/images/Raju.jpg'
import dipendra from '../assets/images/dipendra.jpg'
import nabaraj  from '../assets/images/Nabaraj.jpg'
import devilal  from '../assets/images/Devilal.jpg'
import pha      from '../assets/images/pha.jpg'

const members = [
  { name: 'Dr. Govinda Tamang',         role: 'President',         img: govinda },
  { name: 'Mr. Krishna Nakarmi',        role: 'Vice President',    img: krishna },
  { name: 'Dr. Bijay Lal Pradhan',      role: 'General Secretary', img: bijay,    link: 'https://bijaylalpradhan.com.np' },
  { name: 'Dr. Saroj Gyawali',          role: 'Secretary',         img: saroj },
  { name: 'Mr. Satya Bahadur Shrestha', role: 'Treasurer',         img: satya },
  { name: 'Prof. Dr. Sunity Shrestha Hada', role: 'Member (IPP)',  img: sunity },
  { name: 'Mr. Raju Manandhar',         role: 'Member',            img: raju },
  { name: 'Mr. Dipendra Purush Dhakal', role: 'Member',            img: dipendra },
  { name: 'Mr. Nabaraj Poudyal',        role: 'Member',            img: nabaraj },
  { name: 'Mr. Devilal Sharma',         role: 'Member',            img: devilal },
  { name: 'Dr. Phanindra Bhandari',     role: 'Member',            img: pha },
]

const ExecutiveBoard = () => (
  <section id="executive-board" className="py-16 bg-white">
    <div className="mx-auto px-4 max-w-screen-xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        Executive Members (2023–2025)
      </h2>

      <div className="flex flex-wrap -mx-2">
        {members.map(({ name, role, img, link }) => (
          <div
            key={name}
            className="
              w-full            /* 1 per row on xs */
              sm:w-1/2          /* 2 per row on ≥640px */
              lg:w-1/3          /* 3 per row on ≥1024px */
              px-2 mb-4
            "
          >
            <div className="
              bg-white
              border border-gray-300
              rounded-xl
              p-4               /* reduced padding */
              max-w-xs          /* cap width to ~20rem */
              mx-auto           /* center in column */
              shadow
              text-center
            ">
              <img
                src={img}
                alt={name}
                className="
                  w-24 h-24       /* smaller portrait */
                  object-cover
                  rounded-full
                  mx-auto mb-4
                  border border-gray-400
                "
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {link
                  ? <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {name}
                    </a>
                  : name
                }
              </h3>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ExecutiveBoard
