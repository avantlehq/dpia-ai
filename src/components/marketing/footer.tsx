import { VERSION, VERSION_NAME } from '../../lib/version'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container max-w-7xl py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © 2024 DPIA.ai. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-400">
              v{VERSION} "{VERSION_NAME}"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}