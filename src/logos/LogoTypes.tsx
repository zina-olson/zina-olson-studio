import { SVGProps } from 'react';

export enum AppSvgTypes {
  Logo = 'logo',
  LinkedIn = 'linkedin',
  Moon = 'moon',
  Sun = 'sun',
  Plus = 'plus',
  GitHub = 'github'
}

export const AppSvgs = {
  [AppSvgTypes.LinkedIn]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        fill={color || '#1A0609'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        {...props}
      >
        <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
      </svg>
    );
  },

  [AppSvgTypes.GitHub]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color || 'currentColor'}
        viewBox="0 0 50 50"
        {...props}
      >
        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
      </svg>
    );
  },

  [AppSvgTypes.Plus]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    );
  },

  [AppSvgTypes.Sun]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );
  },

  [AppSvgTypes.Moon]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color || 'currentColor'}
        strokeWidth={2}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    );
  },

  [AppSvgTypes.Logo]: (color: string, props: SVGProps<any> = {}) => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground=":new 0 0 512 512"
        xmlSpace="preserve"
        {...props}
      >
        <g id="base_O" fill={color || 'currentColor'} display={'none'}>
          <g display={'inline'}>
            <path
              d="M251.97,396.1c-21.42,0-41.27-3.64-59.53-10.92c-18.27-7.27-34.2-17.57-47.79-30.9c-13.6-13.32-24.1-28.84-31.52-46.56
			c-7.42-17.72-11.12-37.01-11.12-57.89c0-20.87,3.71-40.17,11.12-57.89s17.92-33.23,31.52-46.56c13.6-13.32,29.52-23.62,47.79-30.9
			c18.26-7.27,38.11-10.92,59.53-10.92c21.42,0,41.27,3.64,59.53,10.92c18.26,7.28,34.12,17.51,47.59,30.69
			c13.45,13.18,23.96,28.63,31.52,46.35c7.55,17.72,11.33,37.15,11.33,58.3c0,21.15-3.78,40.58-11.33,58.3
			c-7.56,17.71-18.06,33.17-31.52,46.35c-13.46,13.18-29.32,23.42-47.59,30.69C293.24,392.46,273.4,396.1,251.97,396.1z
			 M251.97,376.73c18.4,0,35.43-3.15,51.09-9.48c15.66-6.31,29.25-15.24,40.79-26.78c11.54-11.54,20.53-24.99,26.99-40.38
			c6.45-15.38,9.68-32.13,9.68-50.26c0-18.4-3.23-35.23-9.68-50.47c-6.46-15.24-15.45-28.63-26.99-40.17
			c-11.54-11.54-25.13-20.46-40.79-26.78c-15.66-6.31-32.69-9.48-51.09-9.48c-18.4,0-35.43,3.16-51.09,9.48
			c-15.66,6.32-29.32,15.24-40.99,26.78c-11.68,11.54-20.74,24.93-27.19,40.17c-6.46,15.24-9.68,32.07-9.68,50.47
			c0,18.13,3.23,34.88,9.68,50.26c6.45,15.39,15.51,28.84,27.19,40.38c11.67,11.54,25.34,20.46,40.99,26.78
			C216.54,373.58,233.57,376.73,251.97,376.73z"
            />
          </g>
        </g>
        <g id="base_S" fill={color || 'currentColor'}>
          <g>
            <path d="M235.54,344.8l-99.84-224h17.92l95.36,214.08h-9.92l95.68-214.08h16.96l-99.84,224H235.54z" />
          </g>
          <polygon
            stroke={color || 'currentColor'}
            points="236.5,343.5 221.5,379.5 235.14,379.5 251.5,345.5 	"
          />
          <polygon
            stroke={color || 'currentColor'}
            points="251.59,344.5 266.59,379.5 252.95,379.5 236.59,345.5 	"
          />
        </g>
      </svg>
    );
  }
};
