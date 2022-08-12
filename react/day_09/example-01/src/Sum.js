// sử dụng useMemo(): state thay đổi => Component render lại => logic trong useMemo ko phải tính toán lại nhiều lần vì useMemo chỉ thay đổi khi deps thay đổi
import { useState, useMemo } from 'react';