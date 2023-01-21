import {navigation} from "../lib/data"

export default function Example() {
  let current_year = new Date().getFullYear()
  return (
    <footer className="bg-gray-100">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-10 space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="body-large hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-500 body-medium">
          &copy;{current_year} AgentWebb, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
