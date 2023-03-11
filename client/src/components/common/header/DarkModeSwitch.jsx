import React from 'react';


const DarkModeSwitch = () => {
  const toggleSwitchHandle = (e) => {
    console.log("switch pidorasa from: " + e.target.checked);

    if (localStorage.getItem('color-theme')) {  // if set via local storage previously
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {  // if NOT set via local storage previously
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  return (
    <div className="dark:bg-gray-900 items-center">
      <div className="flex justify-between toggle h-10 w-56 overflow-hidden bg-white text-lg">
        <label className="flex items-center" htmlFor="dark-toggle">
          <div className="px-7 text-gray-900 font-medium">Dark mode</div>

          <div className="relative cursor-pointer">
            <input onChange={toggleSwitchHandle} defaultChecked={localStorage.getItem('color-theme') === 'dark'} className="sr-only peer" type="checkbox" name="dark-mode" id="dark-toggle" />
            <div className="block border-[1px] border-gray-900 w-11 h-6 rounded-full hover:shadow" />
            <div className="dot absolute left-1 top-1 bg-gray-800 w-4 h-4 rounded-full transition-all peer peer-checked:after:translate-x-full peer-checked:left-6 peer-checked:transition-all" />
          </div>
        </label>
      </div>
    </div>
  )
}

export default DarkModeSwitch;


