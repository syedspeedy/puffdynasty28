import React from "react";
import {
  ShoppingBag,
  User,
  Menu,
  Search,
  ArrowRight,
  Truck,
  ShieldCheck,
  Star,
  BadgePercent,
  PackageCheck,
  Phone
} from "lucide-react";

const makeCategoryImage = (label, color1, color2, icon) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
        <radialGradient id="r" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,.75)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="900" height="700" fill="#050505"/>
      <rect width="900" height="700" fill="url(#g)" opacity=".75"/>
      <circle cx="690" cy="160" r="230" fill="url(#r)" opacity=".42"/>
      <circle cx="170" cy="570" r="250" fill="url(#r)" opacity=".2"/>
      <g opacity=".18" stroke="white" stroke-width="2">
        <path d="M0 560 C220 460 350 690 620 520 S840 400 900 430" fill="none"/>
        <path d="M0 130 C230 220 370 30 590 160 S780 270 900 190" fill="none"/>
      </g>
      <g filter="url(#glow)">
        <circle cx="450" cy="300" r="150" fill="rgba(0,0,0,.35)" stroke="rgba(255,255,255,.35)" stroke-width="4"/>
        <text x="450" y="335" text-anchor="middle" font-size="120" font-family="Arial, sans-serif" font-weight="900" fill="white">${icon}</text>
      </g>
      <text x="450" y="545" text-anchor="middle" font-size="76" font-family="Arial, sans-serif" font-weight="900" fill="white" letter-spacing="4">${label}</text>
      <text x="450" y="595" text-anchor="middle" font-size="24" font-family="Arial, sans-serif" font-weight="700" fill="rgba(255,255,255,.78)" letter-spacing="8">SHOP CATEGORY</text>
    </svg>
  `)}`;

const categories = [
  {
    name: "Vapes",
    subtitle: "Premium vape essentials",
    accent: "text-purple-300",
    glow: "from-purple-500/45 to-fuchsia-500/10",
    image: "https://ejuicevapedistro.com/cdn/shop/articles/Geek_Bar_vs_Lost_Mary_vs_RAZ_1000x500_crop_center.jpg?v=1764636475",
    clicks: ["Disposables", "Pods", "Coils", "Chargers", "Vape Deals"]
  },
  {
    name: "Glass",
    subtitle: "Pipes, water pipes & bowls",
    accent: "text-sky-300",
    glow: "from-sky-500/45 to-cyan-500/10",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAH0AfQDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAECBAUGAwf/xABUEAACAQMDAgMEBgUFDgQEBgMBAgMABBEFEiEGMRNBUSJhcYEHFDKRobEVI0KywVJictHwFiQmMzQ1U3OCkqKzwuElY6PxF0OTwzY3RVSD0kZk4v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAgIBAwMDBAIDAAAAAAABAhEDITFBEgQiURMyYXGR8EKBobEU8VLB4f/aAAwDAQACEQMRAD8A8ZooooAKKKKACiiigAooooAKKKKACiiimAUUUUAFFFFIAooooAKKKKACiiigAoopaYgoopaYBRiinAUxCYpcU4ClxVJE2MxRiuyxk0GIiq8WLyOJFNxXRlxTcVLRSY2inYpKmhiUlLSUhiUUtJSAKKKKBhRRRSAKKKKACiiigAooooAKilopgJRRRQIKKKKBhRRRSAKKKKACiiigAooopgFFFFABRRRSAKKKKACiiimAUUUUAFFFFABRRRQAUUUUgCiiigAooopgLRRRTEFLRRTAUU4U0U4VSJY4Cu8Ue4gVyWptmAZBmtscbZlN0jQ6L0ys1qLy7B8N8+GgONwHck+Q/qNdV0/S71JZYbXCQHGQxAc4Jx+FarWvDtujUNuPZkt4Y1YeSkDP5EfOsBave+K1tau4M/slQcBvj/XXrRljxxUfGzyqyZHKXlXwVN8sH1hzb7vCz7IbvUQ1Mu4mhmaNxhkOCPQ1EIrycn3M9XHwhlIacabWDNUJRQaKQxKKKKkYlFFFABRRRQMKKKKQBRRRQAUUUUwCloooEFFLRTASkpaKQCUUUUDCiiigAooopAFFFFABRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaBBS0UYpgFLS4oxVUTYYpwpBTgKpCY5akwSbGBqMKcDitIujNqzbaT1bFHph0zUrc3FtjCkH2lGc494zyOxFRrvWtOt43XSrZo2cYMkhyw/E1lhIaC5NdcfUyitHK/TQbsWZ97Ek5zUdqeTTCK5JO2dcVQ002n7aQis2i0xhpKcRSYqChKSnYpKQxKKKKQCUUtJQMKKKKACiiigBaKKKBC0UUtMQlFLSUwEopTSGkMSilpKQBRRRQMKKKKQBRRRQAUUUUwCiiigAooopAFFFFMAooooAKKKKACiiloEJRS0UAJRRRQAUUtFABRRS0wAVKsbG41C8hs7WJpZ5nCRovdiajCtN0axjn1SaL/ACmPS7hoMdw20Ake/aWqkiWOl03pjTGNtfaleX1yhxJ+j0QRIfMB3+3j1AxUDVrHSIreK50rU3uFkYq1vcQ+HNFxnJxlSPeD8qh2kMM95HFPcLbRMcNKyFgg9cDk/KrW/wCn7WHRX1Sy1iK+jjnWB1SB4yCwJB9r+jVkFCKt9P0iK70LVNQaVlexEJRABh977Tn4VUgc1pdEP+CHUQ/m2v8AzacQbM2eKBSt3pBQIeoya0+mdKJf9OT37XLJeESPaWwX/HpGAZDn3A8euDVBYWst5eQ20C7pZnCIPUk4FbvUbPXNN6mszpukXsltpASGAi3bbKF+2e3Iclvka0RLZ57Iu00wDmr7q7SBo2v3FtGjpA2JYA4wRG3IBHqO3yqhBwaljReaVotnJpkmq6rcyw2iy+DGkCBpZpMZIGeAAMEk+opuoWvTr2DzadfXkVxHj+9ruJT4gJx7Lpxx3wQK6aRrlpBp0ml6rZNd2UkolUxSbJYXxgsp5ByO4PHFdbvQLC60641HQtRe5S2XxJ7a4i8OaJM43cZVgCRkjt6UAZgjmrTQtHGr3Uiy3C21tbwtPcTld2yNcZwB3JJAA9TVYwwatNB1k6NePI1tHdQTxNBPBISBJG3cZHIPAIPkRWaLJv1TpG4V4o9Q1SzkAOyW5gR42PvCHcufnWaYc1ro9H0DX5RDot5cWd/KcR2d8AyyN/JWVfM+W4VlJo2ikZHUqykgg9wRRJDTOVFLSVmWFFFFIApKWigAoxRSimAAUtGaKYgooxQBQAtBFGKWmIZSU4ikqRiUlLSUhhRRRQAUUUUhhRRRQAUUUUwCiiigAooooAKKKKACilpKBBRRS0AFFFFABRRRQAUUUUAFFFFABS0lFMBwqdpOp3GkajDfWrASwtkbhkEdiCPMEZBFQKUGqTJaNLOvTGpSm4S5utJZuWtvA8eNT/MYEHHuI49abf6npkOhNo+mC5mWS4WeW4uAEyVUgBUGcD2j3NZ4NRuqvImh2ea0Gg6hp0Ol6pYahPNALxYtkkUXiYKPuORkVnc0oOKEwaL+Wz6bETMms3rPg7VNgACfIZ31RedJuNJmnYqLzp3VLfSLie9cMbmOBhaALkCVuNxPlgEke/FQ/wBJXOf8ol/+of66gZpN1PyoXiX+oaxBqPTtpbzmQ39lIyI5GQ8Lc4J9VbOPcaot1NzRmk5WNKi609tCnsfq9/8AWrW5Dki6hAlVlP7LISMY9QfOpv1/SNF0+9h025uL66vYTbmWSHwo4oyQWwMksxwB5AVmN1G6jyDxFZsnNWGkS6Uskseqw3DRyJhJbdwGhbPfaeGHlg4qszRmpsqjVWEvTmh30WqRX93qE1uwkht/qvgqXHK72LHgHnAHNZq6ne5uJJ5Dl5HLsfeTk1yLU3NDYJBSUtJUFhRRRSAKKKKYC0YpQKcBToVjcUuKXFOxToVjcUuKWimIbQaWigBtNNOIpCKllIbSUtFSMSiiigYUUUUgCiiigAooopgFFFFABRRRQAUUUtAgooooAKKKKACiiigAooooAKKKKYBRSqpZgqgkk4AHnVrL07f294LW4hKOeTyAAPU57D5U0m+BNpclTS4rZ2fT/SUKZ1TU75nHdbdUA+Weaeo+jLOxj1ED23ZiwK0eJrlozWRPhGJxRWuubPoNwRa3utxN5eJDG4/AiqT6jp08rxW9+6OPsieHAf4EdvmKThXY1NMrKWpeo6bNpsqJK8TiRA6PE+4Efw+BqJUtUVyLRSUUALmlzSUUALSUUlAC0ZpKKAFzSUUlIYtFJRQAUUUlIYUUUUAFFFFABTlHGabTh2oQmOpewpBT+4q0SIozQ3enUxqYCE05TkUw05BSQx1GKU0gpiGkcU010Nc2qWNDSKQ06kNSMbRS0lIYUUUUhhRRRQAUUUUwCiiigApaSloEFFFFMAopaSgAooooAKKKKQBRRRQAUUUUwNh0nq+l9LwW2pz2i3V3czOviHn6sigfZH8piRz5Ae+qrUdcN/e3E0aGMSvvxnn5+v8A3qutLjC/VZRuglcFhtyVPbK+/wDOtNbdEo3Tmo6q1wLiSzaP9TDIvshgTlzzjGMY4q7qmiKu0zKM7zE5z3rkQQcYOasJBHZXXhmOO6QqpAR2AORnHrkdj76s4lQw7v7jvEGPth7j+DVL2UtFCscgGCDQQWcAZJHpUq7mgeUImlpaHOMeJJ/1GrTRtHinukimIwdzMUfIYLyfl5Zo50LjZZSrpOp9OCHcy3iOFhYjguf2QfeAfwrGsNrEehxVrq/jWc5t5Q8E0LnZCgASMHzBzkn31UVc6WiY29hS0lFQWLRSUtABRRRTEFJS0lIYUUUUAFFFFIYUVZzaJJbWqPLMjXDqGFtF7bop7FyOF+Gc+4VGtWto7gJcWbz8gBFl25PvOKqt0yb1aIuCaXafSt1aNYwQCRektH4/aur2RyfluqN/d1p6+yvR2gAeot2P5tVKMfknyl8GNwaStXcdU6bOhB6W0Zc+aROv5PVDdXVnOxMWnrbn+Sjkj8eacoRS+4FNt8EKlBqzt9OtbyyZ4p3huUBOyQZST3Bh9k+4jHvqsIKkg9x3rOq2Xd6HA807dXPNLmixUOzzQcmkFdFFVyIYFJPNdQNq0gXzpx4FNKhNjTyKYeKU00mhjFzSEZppNANTY6DzpDSmkpDEoooqRiUUUUDCiiikAUUUUwCiiloASlpKKBC0UUUwCiiigBaKKWgQ2inGkoGJRRRQAUUUUAA47VvOhbj6z1bDYrDsivUIlBbJZthbOfj2HlmsHW8+jhc9fWAA/ZH/ACjQBlNYXZqUqsGDK5De0TyD767JfRrCqNc3sWF7LKxB/HijqVNmvXY/85vzqvuBhl+FNOhNWOd1adW3O4z2Zic1q7eeSw0e9uo4VhmVU2Bva2KzAEDPqDWRT/GL8a2mpoDoeoN6RQfvLQhMyOpuHvWCqyqiqqqz7sDA8/vqJUvUxjUJQPd+QqJQxoKKKKQBS0AUoFMAxS4oFFMkQim08000MaEoopKkoKkWVnNfTGOID2QWZj2VR3JqPUuxvnsjMFUMk8RikB/kkg8eh4qo1e+CZXWiamsRQaELCCBFkYkyS/tMc/1YqoA9Dg1a2HTt5rM0UemRiXxXVBuYLtJbABzgZz6U/WNGh0uWWOKU3At5PCkY8e1jnA9OMZpNU6Y07RUEEnkkk9qbj1NazpnRtM1QSfWE8IxrnMgYBj6DANQJZNNR2X+5+4O0kZFwcH/gopBspNvHcffSKdr5NSrlrZ2/U2MkI9Gk3fwFTtN0mK+kaLhWQ/azlX7DA99ICw6RubGLUVN8P1LkA4/PmqvqKwgsdVc2ciyWk+Zbdh/oyxwD7xitNrHSsPSmLjUkkuYDHHJEEUqrls+yzdhjAyB/2rHahfPqFz4zoqAKFVU7AVbilG72SpNyqtEWlpKKgsep5rqlcV4NdAauJLOw7UhGaRTmlOMVZBzccVzrsa4n7VQykIaSlNNqShSaSiikMKSiikAUUUUDCiiikAUUUUwCilooEFFFFABS0CimAlLRRQAUtFGKYgpKWkoAKSlpKQwooooAK9C+jNd3XdoR5IP+Sa89r0r6Khnq+NtvO1P+U9AGT6vjMfUd2p7+K351UXP21+FXnWuX6pvcDvMw/GqnUbWe2kXxoWjBH7VOmK1wcF+2PjW4v0L6BqhPG2GD95axKoQ65BGTxkd63l6uendaPpBB+8tOPInwYfVP84y/EfkKiVL1UAalMB6j8hUSkMKKKWgBRTuBTRwM0veqJF70uKSnHtTEMam0402pZSCkNKKQikMSlFJRSGaDTtahtdANh4BluJLlJIWRijQsvZtw753dvdWh6xgmvtM0rUxFH9d1CIvctGuMsO5OO3I/GsZp8Y+sWkjMApulU+4DBJr03qcCH6P7KO3kDTtEpDbgSy7yWIYceY+VN2JGC0NIz9Ylv5LnEJVRHG5ByT3qLfatqEd1LCt9clEYjDSk1y0+eaK7kaOVgxGCynvUSZpZZGkcEliSWx3qbaGK7tkkuzEd8mtf0Un98rI48TYyF0dQygMcAj8KxeGPOCQK9C6RlhLQtCkDEzQKQc7mIJOCPMfCmgYz6SdZlutQu7QtKoinSH2T+rlVUBBx5MMj76wFazr8h+oL6RBiN7shR6YjQGspiqlyTHgSinAUoFKh2IBT1Umm+eK6pwMVSQmxwXFKeBRSEnFWQJ3rk3BzT6Y3NQykNpKU0hqChKKKKQxKKKKBhRRRQAUUUUgCiiimAtFFFAgoopfKmAUUlLQAUUUUCFpRSUZpgKabSk0UAJRRSgUAJSU7FIaQBXpf0SK0nVgJ5wqf8t680r1H6HVB6olP/lp+41HQzK9TzCDq6WdxkJdFmHuDUt9Jbu31ia5jktwQ6oACWYfn8KTqGKO46veKQ+w90Vb4bjXa5gidjaSWgWMplJFAwD/Aiuz06bizg9S0pROWolZdK8SRNr+yygnJUkjz+FX1ypPTGuMRz4NuPxWspNGH0m3mXeu1grIWOCe2fwrW3IA6V10/zLcfitRmdzT/AAjX08fGDX5ZgtU/zlN8R+QqJUvVQBqc4Hk38BUSuc6QpaB3o86AFJoBpKKYh1PB8jXMGnA00xMGFMNdSM1zYc0NAhKSlpKkoKKKKQyREpkjhQEktNjb8cV6T1jp8t30roVvBJHIBHId6thCgJOfhXmgQ/VUbBwZcdvcK9U6laLT/o80i0uJck220SR8hiV7fDk1T5EuDzzSLVEnl8VBOF2+yj4BB88/CompY+sEIwEajaoz291XnSmlPf301xudbSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kKx4/3iK3HRkGn2MksF44jjih3sq95X4xk+nOflVVqup7p3KABdxwvkOa7Y+mjxJnDL1UuYopx0BrWP1r6dD7pNQiB/BjTG6I1BO99pZPuvVNdLrV5pU2YjX+ggFQvr02eWNT9HEuWy1myvhISbpfUoTgG2l/1dwpqBcaXfWyGSa1lVB3fGVHzHFWQvZc/aNXvTmoSDUooiQ0cp2yI3KsPeKHgxNe1sSz5ov3JUYQ0laPrzR7bROrLuztOIOHRf5O4A4/Gs7XBJU6O+LtWJRRRSKCiiigAooopALSr3pKKYhxFJSigimAneiilNABS02nCmISr3pnR/wBKXEx8ONzFsCLMSIyzuEG7HJ79h38+O9JV50/qVvaW17aS2xknulRbaQuVWJw2ckAjPljnyppWJs9M1DQB0krW3T1873xt28UBVLXBGMqi/sdyeOcDzryu7vvEuXNzaukpPtEyuCPvNaPTekuqdTSPCsT3c+QH9uKtNROiafM0WLaKTOSCNzfPua0hgcl5N0jGedRfilbMXGAxJVgML29PWtx0RYuFhbYSxuIsDPOeTke7GRVUy2N0pKLBKPMqBn+utD0zD+vSKBMM0sXtA8hVJ4/Gm8LStbFHOpOnozvXMWzXr9c5C3pxjsMxqazGK1HXCheo9Sy5JF6VxjjhBzWZPfioaNUNNAoNFSMBxXRe1Mp6+lUhMdnig9qMAGmk8UxDGPNJSE80gPNQUDd6bXQjNMIpMaEpKWkqRhRRRQMKKKKACiiikAUUU4CmISilNApgAFL8KQ96BQIMc0EUpPNBpgJS0UoFACUuKcqFzhQWPoOTXcWF52FnPn/VN/VQIiGlqeuhaw43LpV8R6i2f+qub6VqMP+M0+6T+lAw/hRQyJSgU5kZDh1Kn0YYpO9MQhptONJSGJXqX0OH/AAllAH7C/uNXlteofQ02Opph/wCWP3Go6DsouoNLhub66u/rJST626kDGF/WYx8fOmyR3KNt8VZdvH6xcN8yP6q5avZmPqi6uZ7OWaHxZGAVNwJycHHmKh3lkt863FoWgkJ9sMCv4etd2F1G0tnnZ1cqctfpwdryC6umhj3RoMsxUZI4x5+fetHcEN0lrxHfEH5rWZFzFpa7PEe5lPBZiSB7s+XwrSygL0drzZzkQfmKzzePkn2a+n8vFrrowWq/5zuP6f8AAVEqZquf0pcZ776h1ynYg7UUppKAClpKUUAFOpKUDNMQ5T60MPSlxUqLS9QuNvgWNxKWGQEiY5Hu4qiSARSV2ngmt5TFPE8Ug7o6lSPka41DLQUUUUgO6K0lvHGg5Mpwc+eBXpPVdut50L02jMIwtsGZsdgEFedWu7+99o3Ez4C47nAr1HrpGtegtFiVFDxwJ4vtA8hcYBHlnP4U3yCKfoiaMaLJbDHiRTNvHnzjB/D8KoOotCuI7+e6gBlilYuyj7Sk8n4ioPT095+lQtpIVuJTgehHnn3VrLyG7lUxzXqJIy4IiiA+YySa7caWbH4tcHn5W8OTyT5MPYm1W7RpZHjUd8HHOOOa9B6VuFe/QxupBI5BrD32iPZEOZBJETgnGCPjVt0QzHWbeNPaxLlcDuT/AO1YRlLFcWjpcY5qlFnXr9AnUuojAz9aBGPfGP6qypNav6R4vD6vvcrtJZCefPYM/lWUbtUs0QhoBFGDSVIx4HNOHfApq9+ad2BIpoTHJFJM+yKN5HPZUUkn5CrK36U167H6rTZRx3kqBfL41Dk254Na5eb+TLHxQxsd6SgnyoBrE1HCpFuMtnGa4AHGdpx61Lt1jxzlffTEdp7mIR7GJJ/mj/vVY+McE5z5ipU6wA4WV2qIxGeO1AxKk2bBRJkfs9x3HNRa7QB9rlc4C8nHahAy8nnQaXaL4pf8AUYOcjHtHj5VG1p2EsUZKZjiUMUJ9rzz+OPlSQyFo7XCFyv7JHBwe1dNdaOS58WMIC3DbT5j/ALVSIZTnNJmlYHOMUvhsBkjGaRQmARV30v4Z1iHxUkdAckKu4fOqmMDBHerbSXNvq8YjlKqWxlR3oXIMh6oCAowB+sfjHJ5quPwqx1SVnbjhTI5x5ZzVcSaGCEIpKXNJUlBRRRSAKKKKACiiigAooooAKKKKAHK7LkAkZ4NOjJB4YjnyoopiJLAC3B7kk8mkj+2owMEc0UUxF7p8YEVywJHhAFQP41D1SdwI7fjZHkjjnnmiitCGVkpPhiuaDIooofILgUfa+VPfsKKKXQ+wkOIxXBjwKKKhlnWz/wArj95qx1gDw4SFAJGSRRRQBTnvTkOHFFFIAkplFFAD+4ptFFAFjpTtHfwFT37136g/y0kcZA4ooqhEOzUEHNcGPtZ86KKAFbtXPzoopsSJyKDYyE+RGKiR/aFFFSMvL0BdJhGM5cHmqGU7pWPqfKiihgL2NSsBoeQO1FFAEI96coyRRRSGSto2H+jmojfaooq5dEoQ96POiioKOyuRGRUmJsxkMA3xoopiIshG9vZUcdgK40UUmNCVIte0gycFDketFFC5B8FzaMR9QAOMvzUPUTvvZmOM7sDHlRRVIlnO/URyxqo4Cg027UbI5PNhzRRVS5FHg4r61aWarJdQ7lHtEZooqSiLqEapCSM/45xyarTRRRIEJRRRUFBRRRQAUUUUAf/Z"
  },
  {
    name: "Batteries",
    subtitle: "Power & performance collection",
    accent: "text-cyan-300",
    glow: "from-cyan-500/45 to-blue-500/10",
    image: "https://cdn.shopify.com/s/files/1/0582/4073/8774/files/vape-battery.jpg",
    clicks: ["510 Thread", "Variable Voltage", "USB-C", "Preheat", "Palm Style", "Box Mods"]
  },
  {
    name: "Grinders",
    subtitle: "Metal, wood & plastic grinders",
    accent: "text-emerald-300",
    glow: "from-emerald-500/45 to-green-500/10",
    image: makeCategoryImage("GRINDERS", "#059669", "#84cc16", "R")
  },
  {
    name: "Lighters",
    subtitle: "Torches, butane & flames",
    accent: "text-orange-300",
    glow: "from-orange-500/45 to-red-500/10",
    image: makeCategoryImage("LIGHTERS", "#ea580c", "#dc2626", "L")
  },
  {
    name: "Accessories",
    subtitle: "Trays, storage & essentials",
    accent: "text-yellow-300",
    glow: "from-yellow-500/45 to-amber-500/10",
    image: makeCategoryImage("ACCESSORIES", "#ca8a04", "#f59e0b", "A")
  }
];

const featuredProducts = [
  { name: "Premium Cartridge Battery", price: "$19.99", tag: "Best Seller", category: "Vapes" },
  { name: "Luxury Glass Hand Pipe", price: "$24.99", tag: "New Arrival", category: "Glass" },
  { name: "Metal 4-Piece Grinder", price: "$14.99", tag: "Popular", category: "Grinders" },
  { name: "Refillable Torch Lighter", price: "$12.99", tag: "Hot Deal", category: "Lighters" }
];

const benefits = [
  { icon: Truck, title: "Fast Retail Pickup", text: "Organized product layout made for easy customer shopping." },
  { icon: PackageCheck, title: "Clear Product Listings", text: "Categories, prices, and descriptions are easy to understand." },
  { icon: ShieldCheck, title: "Trusted Quality", text: "Premium style that makes your store look reliable and professional." },
  { icon: Phone, title: "Customer Ready", text: "Designed for calls, questions, and quick shopping decisions." }
];

function VapeMotionGlow() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-purple-300/25 to-transparent blur-xl animate-[pulse_2s_ease-in-out_infinite]" />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,.25),transparent_34%),radial-gradient(circle_at_top_right,rgba(245,158,11,.20),transparent_30%),radial-gradient(circle_at_center,rgba(14,165,233,.09),transparent_42%)]" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-8 py-7">
        <div className="mb-5 rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-center text-sm text-white/75 backdrop-blur-xl">
          Retail Smoke Shop • Premium Products • Fast Local Shopping • New Arrivals Weekly
        </div>

        <header className="flex items-center justify-between mb-10">
          <div className="flex gap-6 items-center text-white/80">
            <Menu size={30} />
            <Search size={30} />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight italic">
              <span className="text-purple-300 drop-shadow-[0_0_18px_rgba(168,85,247,.9)]">Puff</span>
              <span className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,.7)]">Dynasty</span>
              <span className="text-yellow-300 drop-shadow-[0_0_18px_rgba(250,204,21,.9)]">28</span>
            </h1>
            <p className="mt-3 text-xs md:text-sm tracking-[.5em] text-white/70 uppercase">Retail Smoke Shop</p>
          </div>

          <div className="flex gap-6 items-center text-white/80">
            <User size={28} />
            <div className="relative">
              <ShoppingBag size={28} />
              <span className="absolute -right-3 -bottom-2 bg-white/20 text-xs rounded-full w-6 h-6 flex items-center justify-center">0</span>
            </div>
          </div>
        </header>

        <section className="grid lg:grid-cols-[1.1fr_.9fr] gap-7 items-stretch mb-12">
          <div className="rounded-[2rem] border border-white/15 bg-white/[.04] backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-purple-950/30 overflow-hidden relative">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -left-20 -bottom-24 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-500/10 px-4 py-2 text-purple-200 text-sm font-bold uppercase tracking-widest">
                <Star size={16} /> Premium Retail Store
              </span>

              <h2 className="mt-7 text-5xl md:text-7xl font-black leading-[.95]">
                Shop smoke essentials with a luxury retail experience.
              </h2>

              <p className="mt-6 text-lg text-white/68 max-w-2xl">
                Browse vapes, glass, grinders, lighters, rolling accessories, and daily essentials in a clean ecommerce layout built to help customers shop faster.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-full bg-white text-black font-black hover:scale-105 transition flex items-center justify-center gap-3">
                  Shop Products <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 font-black hover:bg-white/10 transition">
                  View Categories
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[.08] to-white/[.02] p-6 shadow-2xl shadow-orange-950/20">
            <div className="rounded-[1.5rem] bg-black/35 border border-white/10 p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-white/60 uppercase tracking-[.3em] text-xs">Featured Deal</p>
                  <BadgePercent className="text-yellow-300" />
                </div>
                <h3 className="mt-5 text-4xl font-black">New Retail Arrivals</h3>
                <p className="mt-4 text-white/65">Add your latest best-selling products here with clear prices and strong call-to-action buttons.</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 2).map((product) => (
                  <div key={product.name} className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                    <p className="text-xs text-yellow-300 font-black uppercase">{product.tag}</p>
                    <h4 className="mt-3 font-black leading-tight">{product.name}</h4>
                    <p className="mt-3 text-2xl font-black">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/15 bg-white/[.03] backdrop-blur-xl overflow-hidden shadow-2xl shadow-purple-950/30 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {categories.map((item, index) => (
              <button
                key={item.name}
                className={`group relative min-h-[190px] overflow-hidden border-white/10 ${index !== 0 ? "md:border-l" : ""} ${index > 1 ? "border-t md:border-t-0" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full ${item.name === "Glass" ? "object-contain bg-black p-2" : "object-cover"} opacity-45 group-hover:opacity-70 group-hover:scale-110 transition duration-700`}
                />
                {item.name === "Vapes" && <VapeMotionGlow />}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.glow} via-black/55 to-black/20`} />
                <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 py-6">
                  <span className="uppercase tracking-wide font-black text-xl block drop-shadow-lg">{item.name}</span>
                  <span className="text-xs text-white/75 mt-1 block">{item.subtitle}</span>
                  {(item.name === "Vapes" || item.name === "Batteries") && (
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {item.clicks.slice(0, 3).map((click) => (
                        <span key={click} className="rounded-full border border-purple-300/30 bg-purple-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-purple-100">
                          {click}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-end justify-between gap-5 mb-6">
            <div>
              <p className="text-purple-300 uppercase tracking-[.35em] text-xs font-black">Shop By Category</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">Retail Categories</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white/80 hover:bg-white/10">
              See All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {categories.map((item) => (
              <article key={item.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[.04] shadow-xl hover:bg-white/[.07] transition">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`absolute inset-0 w-full h-full ${item.name === "Glass" ? "object-contain bg-black p-2" : "object-cover"} opacity-90 group-hover:scale-110 transition duration-700`}
                  />
                  {item.name === "Vapes" && <VapeMotionGlow />}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.glow} via-black/20 to-transparent`} />
                  <div className="absolute top-4 left-4 rounded-full bg-black/65 border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                    {item.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-black uppercase tracking-wide">{item.name}</h3>
                  <p className="mt-2 text-sm text-white/70 min-h-[40px]">{item.subtitle}</p>
                  {(item.name === "Vapes" || item.name === "Batteries") && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {item.clicks.map((click) => (
                        <a
                          key={click}
                          href="#"
                          className="rounded-full border border-purple-300/20 bg-purple-500/10 px-3 py-2 text-center text-[11px] font-black uppercase tracking-wide text-purple-100 hover:bg-purple-500/25 hover:border-purple-300/45 transition"
                        >
                          {click}
                        </a>
                      ))}
                    </div>
                  )}
                  <a href="#" className={`${item.accent} mt-5 inline-flex items-center gap-3 uppercase text-sm font-black tracking-widest`}>
                    Shop Now <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-end justify-between gap-5 mb-6">
            <div>
              <p className="text-yellow-300 uppercase tracking-[.35em] text-xs font-black">Customer Favorites</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">Featured Retail Products</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <article key={product.name} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 hover:bg-white/[.07] transition shadow-xl">
                <div className="h-48 rounded-xl bg-gradient-to-br from-white/10 to-white/[.02] border border-white/10 flex items-center justify-center mb-5">
                  <ShoppingBag size={54} className="text-white/35" />
                </div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs rounded-full bg-yellow-300/15 text-yellow-200 border border-yellow-300/20 px-3 py-1 font-black uppercase">{product.tag}</span>
                  <span className="text-xs text-white/45">{product.category}</span>
                </div>
                <h3 className="text-xl font-black leading-tight">{product.name}</h3>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-3xl font-black">{product.price}</p>
                  <button className="rounded-full bg-white text-black px-4 py-2 font-black text-sm">Add</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-5 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
              <benefit.icon className="text-purple-300 mb-5" size={34} />
              <h3 className="text-xl font-black">{benefit.title}</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </section>

        <footer className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black">Ready to shop?</h2>
          <p className="mt-3 text-white/60">Add your phone number, address, store hours, and retail policies here.</p>
          <button className="mt-6 px-8 py-4 rounded-full bg-white text-black font-black">Contact Store</button>
        </footer>
      </div>
    </main>
  );
}
