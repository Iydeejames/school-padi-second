import { MdOutlineContentCopy } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import PropTypes from "prop-types"

export default function  ChatConversation  ({ conversation }) {
  return (
    <div className="p-4">
      {conversation.map((message, index) => (
        <div key={index} className="mb-4 text-[#54585C] text-lg">
          <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="flex items-center gap-3">
                <img src="/person.svg" className="w-12 h-12" alt="" />
                <span className="bg-[#014F9E] text-white rounded-full px-3 py-1 text-sm mr-2">
                  {/* {message.title} */}
                  History of the American Revolution
                </span>
              </div>
              {/* <span className="text-xs text-gray-500">History of the American Revolution</span> */}
            </div>
            <div className=" flex gap-4 text-gray-800 text-sm leading-relaxed">
              <img src="/person.svg" className="w-12 h-12" alt="" />
              <div className="flex border flex-col rounded-xl   gap-4 p-4">
                <h2 className="text-xl">A Brief Overview of US History</h2>
                <div className="">
                  <h3>
                    The United States, a nation of immigrants and ideals, has a
                    rich and complex history. Here&apos;s a condensed look at
                    some of its key periods:
                    <ul className="list-disc space-y-4">
                      <h4>Pre-Columbian America</h4>
                      <li className="space-y-4">
                        <strong>Indigenous Civilizations: </strong> Before
                        European arrival, diverse Native American cultures
                        thrived across the continent, with complex societies
                        like the Maya, Aztec, and Inca.
                      </li>
                    </ul>
                    <ul className="list-disc space-y-4">
                      <h4>Colonial Era</h4>
                      <li className="space-y-4">
                        {" "}
                        <strong>European Exploration: </strong> In the 15th and
                        16th centuries, explorers like Columbus sought new trade
                        routes, leading to European contact with the Americas.
                        <li>
                          <strong>Thirteen Colonies: </strong>  England established thirteen
                          colonies along the Atlantic coast, each with distinct
                          characteristics.{" "}
                        </li>
                      </li>
                    </ul>
                    Depression The Civil Rights Movement The Cold War Or,
                    perhaps you&apos;d like to focus on a particular topic, like
                    Native American history, women&apos;s rights, or immigration? Let
                    me know!
                  </h3>
                  {message.text}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button className="text-gray-500 hover:text-gray-700 flex items-center text-xs">
              <MdOutlineContentCopy className="mr-1" /> Copy
            </button>
            <button className="text-gray-500 hover:text-gray-700 flex items-center text-xs">
              <BiRefresh className="mr-1" /> Retry
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Any other question?"
          className="flex-grow border border-gray-300 rounded-lg p-3"
        />
        <button className="bg-blue-500 text-white rounded-lg px-6 py-3 flex items-center">
          Send →
        </button>
      </div>
    </div>
  );
}

ChatConversation.propTypes = {
    conversation: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
}