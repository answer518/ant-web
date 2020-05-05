<template>
  <div class="ant-user-main chat-content">
    <div class="slideleft layui-layout-sider">
      <div class="layui-layout-sider-children">
        <div class="icongroup layui-row">
          <div class="active selgroup">
            <div>会话列表</div>
          </div>
        </div>
        <div class="friendlist layui-row">
          <div class="friendlist-item">
            <div class="headicon">
              <img src="https://www.douyijob.com/upload/defaultavatar/userdefaultava.png" alt />
              <!-- <div class="positonname">猎头</div> -->
            </div>
            <div class="nameinfo">
              <div class="layui-row">
                <div class="name">
                  <span class="name">王先生</span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyREU1NzY5RkM3RjExRTlCMURCQUE2NEFCRUNDRUExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyREU1NzZBRkM3RjExRTlCMURCQUE2NEFCRUNDRUExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDJERTU3NjdGQzdGMTFFOUIxREJBQTY0QUJFQ0NFQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDJERTU3NjhGQzdGMTFFOUIxREJBQTY0QUJFQ0NFQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71zlDKAAACQElEQVR42pRVTUhUURT+3jhJRqmZShpFSfSzicyNQbNpFUGabjIrUatFKxfRpmUtohbBuHCRZoE4Si2axIGWrYJKi4owF4UF/aCpyUj+ZL6+w7nOmxnve+GB77zz3rn3m/N37ziwSdTdSN1AnCSqiK3G8514RTwiYmhz5rK3OhayVuqbRDGC5SdxhaT37YRRN5e6k2jC2kQIL5J4SV7CaY67xFmsXZpNYM1ehFH3PHWX347bEWBXvt1Xl0iZLZK+YxowRmzxI3x9GjhYYvc57Rk13SEpnwkiExkaB34tcPUmoKLAd5k0sTFsRiND1ucANRVAJaP6zVL3jQJfZoGn9f+tZ13YzFlKDpcB/cc0mnRZWmYHQ2r/ob0uZCWslM+p6uwuBJ7UemQTHNvkotorZO8mOaTDvhGWZ/zO9Wogn9M4/1e7V8qpLLoDXH3mrekZYfXn/HOWlFlylMqL1E2k4y0Q/+ilemMIOL4TOFKuz5pBz58lXyXCl2JtCCtE3k+uXjkypc+SPC3D56QiS4aFMC6WdHPcpHJ0e+aqEMc/sk3tsWRgl+NC2GeGEr0f9GvjXuBatTZnf5F2fd9m9cVGfcl+EP0rR6+FursgF+6LBjh7Cu07EjxPJwYA1+5u4tHr0S63Offk1phZhBN5CHfg0+oZbH8D1Cd8ybqELPu2uUAss46ttYOa7oFiJXvOZKYXfFOVK+9S0AV7jvpW2i0dVLPLjCwWfGMrKYcDp8w5P0SUGc83GQ3iMfHA9hfwT4ABANOvmt+7qcMAAAAAAElFTkSuQmCC"
                    alt
                  />
                  <div title="经理" class="elip">经理</div>
                </div>
                <div class="msgtime">08:57</div>
              </div>
            </div>
            <div class="newmsg">
              <span>
                <span class="elip" style="width: 95%;">是你自己证书吗</span>
                <!---->
              </span>
              <span class="openoperate">
                <i class="layui-icon layui-icon-ios-arrow-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainContent">
      <div class="msghead layui-row">
        <div class="layui-col">
          王先生
          <span class="positionname">经理</span>
        </div>
      </div>
      <div class="msgcontent layui-row">
        <div class="msgarea"></div>
        <div class="sendarea">
          <div class="operatearea layui-row">
            <div title="图标">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFQUYxOTZBMDFDNDExRUFBOUFGQ0NBRjI2ODUyOTE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFQUYxOTZCMDFDNDExRUFBOUFGQ0NBRjI2ODUyOTE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkVBRjE5NjgwMUM0MTFFQUE5QUZDQ0FGMjY4NTI5MTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkVBRjE5NjkwMUM0MTFFQUE5QUZDQ0FGMjY4NTI5MTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40zMpkAAACfElEQVR42qyWTUhUURTH33tjo4uhRZEKomJMRekqXYktXAZSKFQa1c5pZwV+hNIya0yNXLtLI7UPceMug2AWRbQxMBrSpg9SI4OxHCd1+p/43/H6eO/NNHXgx5v33jn/47v3nnM0Q6GQ4WFl4CyoB0fAPvALfATvwVMwBubdBEyXBCJ8E5wGPsPbtpjkKojZX1oOASfALGgBm+ABOAcqQD7YDQ7zmbzboO9rXndYnu3+Ehhk4knQAaI2nySYI6MgCPpAI++LwW2nLzjDFynQxYCokdnEp4kxslwD1NqRQNZ8WPYEdPMv+luTmB5qDFMzneAGCIBHOYorC4OH1AqrBOWgmWt72fh3u0ItOYHlFsUtnogPmuN1EOfVzZx8RGOCms0Wi8jgqdGtnZ/a5pHAzUdp1UuCKt48tzn1gx9gyCOBm88LXqukkhMsoAKwbvwf81MrmS60bweKAnMnj/axQuWo3ZVCq+2fTnopRdqPi9gtPa408ranNBJNV/JXUPK5pkIq+IIWK+u6xh6T6fzre9C2sr9wFxMsW+whhj+eaHIIbgXPWN1OyLvz9qCC7z/Vs1lJ8ER+7Yku+nNYa9PpoaY1Y7HVbu1988WXH0/YfaXkj1HIiTru1fbuQkO0VBuXBAtg3EylfAenXsnCrRA5etey+IpO+v6JOwQN0RJN0VYDp4x7EWBXzLUfdbIHrYJKGUCq2cW4obJxvXTMRbyXGq1quunz4D4blal1xWAWwkH6hqnXQS3HiXaHA3yEQ6SBjesxeAk+0a8EVHMonWLlyrJcBPeyHfphtlwri6E/zr2LZZrJhrYnLQxS/7bIphXy/RIPxQzF37ll/y3AAM6FtgXIZkYZAAAAAElFTkSuQmCC"
                alt
              />
              <!---->
            </div>
            <div title="电话">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFM0UyQUI2MDFDNDExRUE4MUVBQUJDQ0JCRjFEMkM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFM0UyQUI3MDFDNDExRUE4MUVBQUJDQ0JCRjFEMkM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUzRTJBQjQwMUM0MTFFQTgxRUFBQkNDQkJGMUQyQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUzRTJBQjUwMUM0MTFFQTgxRUFBQkNDQkJGMUQyQzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7NH/f3AAABhElEQVR42tyWPUsDQRCG98IRG2Ps7bUR/ChURDsRRCuttLPxLFPYpU/lD/B+QSqtFEHsBFERIRIIMXVq5UiK2KzvyESWY3f2zDXiwMOy2Zl5sze3OxdorRVZFEXKsCI4BvtgFowru/VAE9TBGfgcLsRx/D2GlqApcAnmld9IeIU5BDugazoUUgFFI3kH7IEyCByU2afDMVdgTBKI2PENLIELkAg7SNiHfNtgDhxJAgc8ToN3oDNCvjOpHFaBRZXfFsxJaKmB4uer7k+26F89gElHsg8q8OrpdZvn2leDH0NyGmpCcsVrNfa1WsGz3Y0Mj2RTWvQJTGQ8CyML5Lb/L5BkyNHLI3CbQeBmJAEcHhqqfJiUcNCq7Gu10PG7NkSU56C1/lSRhx1J6gEuSraipwVePFfEHSNdGU1JoM6jdMkFrksvlcMqQJ26wc3jCewaWydbB2vGvMQ+jxzzyjmcb9EAbBt9+fwX9Wxw7MD3FtFXwTKogGfQF5L22afCfbmbdvgSYAC55ViA/+/b9gAAAABJRU5ErkJggg=="
                alt
              />
              <!---->
            </div>
            <div title="微信">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFNzZENkIxMDFDNDExRUE4M0I2RUE1QTUxNEQxMzFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFNzZENkIyMDFDNDExRUE4M0I2RUE1QTUxNEQxMzFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkU3NkQ2QUYwMUM0MTFFQTgzQjZFQTVBNTE0RDEzMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkU3NkQ2QjAwMUM0MTFFQTgzQjZFQTVBNTE0RDEzMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vsP1/AAAC5klEQVR42tSWX0jTURTHz8+5LZfLpTUr/2CaUdgwR2EKK8JQBz1UEEIRaZRvyx4kpKJAmBT4IhFSREVBRfTgQxRo1EMhZTEjLGiamRiaf5Zl0+ac63t/nl9sP+ZchA9d+HD2u/ee77n3/M7v3knV1dW0mC2OFrnFRxkzgT1gJ7ACM0gGHjAMXOApaAHj84lIEVKUAs6BSmCMYZET4AaoB6MLpWg3eAccIBG0gRpQAJLEgtgWcH8bzxPzu9h/3h0cAteBhrfu4GALtTxwkVMZAFXglnoHNhYXz2dASYzixPNKOEUa1tkeGiAhZOUNwAmCf1ksQX5vF1jnGuvKAQ6CHM5h/T9W5VnWyWFduUz386DI43Q07/Zauw5mH5fvVrCKh4bAK1Gy25pam+P8gUusezWOK0K0xyo9J5egk8VLYT6AO6Ai85k7u7Cp1QBrwHO26BNjnVW2Ova3KilawR39qgC1XILHIX4E9iHIUgbTXn8ijT9Aq119YU4+45KMkO9JDjDGHStVARqB95fJcBe2mV/en/Zly1oKaDU0aM0Kc9J5fbL1J+gkLCxfBHjDY2WqAKfFDlxHdywVfur30W9bTy9rSmUb2pb3jsjWa14mTJ0IcJ/HTqhXya081hKSZoNI2Wf599gG+f2XiwA3wQDIB6ci+CXGGiDzuZsMoxOEtNLIxjVyxkSAKXCY55yM4Pc2FvGM9m5K6+iloCRRT7mFZuPlZLxXjoonUVZ7OZqwYewn5d3rQICeOXG7hX6kJyvDV0IPO+V40IID4Bj4RpL0oKuisNJrNhYFdPFyaerHJ8k4OE4p7iEy9c2d0H6Dnj6WbSJPjlnRawX2SAG6QW6seRelOmxJp4GidaI0Q8X3Fjc+mox0o+VykAYuT3EMbxbflkjhjF47M23Ua72pSfQ9I4U8uWZCn1qjRYirr8wXfJmcB7fBjJLHsDvW56cOx65kPotSufsr6ATFfMhNRbsy/69/Fb8FGACa8MRozSNFFgAAAABJRU5ErkJggg=="
                alt
              />
              <!---->
            </div>
            <div title="简历">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDVBQTAyMDFDNDExRUE4RTkwRTIzQTZCRkNFNTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDVBQTAzMDFDNDExRUE4RTkwRTIzQTZCRkNFNTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwNUFBMDAwMUM0MTFFQThFOTBFMjNBNkJGQ0U1MjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwNUFBMDEwMUM0MTFFQThFOTBFMjNBNkJGQ0U1MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4TLiIoAAACmUlEQVR42qSWzU8TURDAp2Qt2Op2C8WEEEVF7KWNH4kKJnpARI2e5EQ8cakfFzl4MPGuHrzrP2B6wpMfURoPmkiNBIP0QK0QS9ID2NKGdrXbijrzMts8K+1u10l+eS87H2/e17x1RSIRkMSNXEPGkRCyA+xJCUkgUeQRUjEVimTUizxFDkPrQokMMhPIJSRDijYpczN4ChlDfIjLJj72SXGMZ0i7PMBVVnxGjr+7deEJsmE3fbIlH/JFksghRKy9i/dghqc3xoYkA8h9ZKQjr6t9b5KgpXNCUejrgvTpIJT9Xkoihtzm7OHkgxeXsZlC4siQuQdHuY1xG2QDbfu6DuHHM6AY1VrGXalV8K2sw8KVIfVHp5cCDnOClP00mx2p3wMSc1nuUnDq7HmbFMEL+7ph9vqwgPr0jXQsGvuQFLn9aw/qZaTmycvy5XwYKt52AfWF7mtW9hndKlCjAdRmm/q78VG1PUBNaENJ+l8uwDbdAHexDAewL3R7A5YnTLEyWDkVFMvkX/4Gxx6+rn3fdCtCZyWWM+gofIe2zV//OuI30v3XALQkA8/nwYXBVsO74cONMwLq0zfSkY3jAXo+pkEpVyG/vxuWzoWg6nELqJ/v3yV0PXNp53vQubQmWlp/vKFb2yyv4V4cdDYDO2tsZdNoBnSj1fjN0VZKdqmVGcQcvAmvms2gwvVI5ezvUAELReOamsk3jbrR64fE+GCBfeQbXZJnMFdXgxapOirGz5zlTTWqOa6ki3U1KSEPEDWrKJ4Wjet60pMtBqxeM0+2FCBb9pGralR+cKi0vueXKMUPyLRUeq1kJ3IWuYfQmf3Er5th7gFdx4vSuzwFzmWeYxn1p4j+Ak4gk8gsorcQVGefSc48Yyr+CDAAVvTbJx6n9AYAAAAASUVORK5CYII="
                alt
              />
              <!---->
              <!---->
            </div>
          </div>
          <div class="layui-row">
            <div class="layui-input-type-textarea">
              <textarea
                wrap="soft"
                autocomplete="off"
                spellcheck="false"
                placeholder="请选择好友"
                rows="4"
                class="layui-input"
                style="height: 94px; min-height: 94px; max-height: 94px; overflow-y: hidden;"
              ></textarea>
              <!---->
            </div>
          </div>
          <div class="btngroup layui-row">
            <button disabled="disabled" type="button" class="layui-btn layui-btn-success">
              <span>发送</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imchat',
}
</script>

<style lang="scss" scoped>
.chat-content {
  display: flex;
  flex-direction: row;
  flex: auto;
  background: #f5f7f9;
  margin-top: 80px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;

  .slideleft {
    background: #fff;
    border-right: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 30px 10px;
    width: 300px;
  }

  .friendlist {
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 15px;
    height: 580px;
    overflow: hidden;
    overflow-y: auto;
    border-top: 1px solid #e6e6e6;

    .listcontent {
      cursor: pointer;
      box-sizing: border-box;
      padding: 16px 15px;
      clear: both;
      position: relative;
    }

    .headicon {
      float: left;
      width: 48px;
      height: 48px;
      border-radius: 24px;
      overflow: hidden;
      position: relative;

      img {
        width: 48px;
        height: 48px;
      }
    }

    .nameinfo {
      padding-left: 8px;
      margin-left: 46px;
    }

    .newmsg {
      margin-left: 46px;
      padding-left: 8px;
      color: #999;
      font-size: 14px;
      padding-right: 10px;
      position: relative;
    }
  }

  .layui-layout-sider-children {
    height: 100%;
    padding-top: 0.1px;
    margin-top: -0.1px;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #fff;
  }

  .msghead {
    box-sizing: border-box;
    padding: 24px 30px 20px;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #e6e6e6;
  }

  .msgcontent {
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    box-sizing: border-box;

    .msgarea {
      padding: 20px 30px;
      height: 430px;
      overflow: hidden;
      overflow-y: auto;
    }

    .sendarea {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 0 20px 12px;
      border-top: 1px solid #e6e6e6;
    }

    .operatearea {
      cursor: pointer;
      padding-bottom: 10px;

      > div {
        display: inline-block;
        padding-right: 20px;
        position: relative;
        padding-top: 12px;
      }
    }

    .btngroup {
      text-align: right;
      margin-top: 10px;
    }
  }
}
</style>
