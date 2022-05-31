
export const EmailBox = () => {
  return (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-black shadow-md rounded-md">
      <h2 className="text-3xl font-semibold text-center text-gray-400">Get in touch</h2>
      
      <div className="mt-6">
        <div className="items-center -mx-2 md:flex">
          <div className="w-full md:mx-2">
            <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>

            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text"/>
          </div>

          <div className="w-full mt-4 md:mx-2 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-300">E-mail</label>

            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email"/>
          </div>
        </div>

        <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>

            <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-4 py-2 text-white bg-gray-700 transition-colors duration-200 transform rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
        </div>
      </div>
    </section>
  )
}
