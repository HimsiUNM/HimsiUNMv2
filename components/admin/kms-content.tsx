"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface PaymentEntry {
  id: number
  nama: string
  nominal: number
  metode: string
  tanggal: string
}

interface ExpenseEntry {
  id: number
  nama: string
  nominal: number
  keterangan: string
  tanggal: string
}

interface KMSContextType {
  payments: PaymentEntry[]
  expenses: ExpenseEntry[]
  addPayment: (payment: Omit<PaymentEntry, "id">) => void
  addExpense: (expense: Omit<ExpenseEntry, "id">) => void
  deletePayment: (id: number) => void
  deleteExpense: (id: number) => void
}

const KMSContext = createContext<KMSContextType | undefined>(undefined)

export function KMSProvider({ children }: { children: React.ReactNode }) {
  const [payments, setPayments] = useState<PaymentEntry[]>([
    {
      id: 1,
      nama: "Budi Santoso",
      nominal: 500000,
      metode: "Transfer Bank",
      tanggal: "2024-01-15",
    },
    {
      id: 2,
      nama: "Siti Nurhaliza",
      nominal: 750000,
      metode: "Tunai",
      tanggal: "2024-01-14",
    },
  ])

  const [expenses, setExpenses] = useState<ExpenseEntry[]>([
    {
      id: 1,
      nama: "Utility Listrik",
      nominal: 150000,
      keterangan: "Pembayaran listrik bulanan",
      tanggal: "2024-01-10",
    },
    {
      id: 2,
      nama: "Supplies Kantor",
      nominal: 200000,
      keterangan: "Pembelian kertas dan alat tulis",
      tanggal: "2024-01-09",
    },
  ])

  const addPayment = (payment: Omit<PaymentEntry, "id">) => {
    setPayments([...payments, { ...payment, id: Date.now() }])
  }

  const addExpense = (expense: Omit<ExpenseEntry, "id">) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deletePayment = (id: number) => {
    setPayments(payments.filter((p) => p.id !== id))
  }

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  return (
    <KMSContext.Provider value={{ payments, expenses, addPayment, addExpense, deletePayment, deleteExpense }}>
      {children}
    </KMSContext.Provider>
  )
}

export function useKMS() {
  const context = useContext(KMSContext)
  if (!context) {
    throw new Error("useKMS must be used within KMSProvider")
  }
  return context
}
