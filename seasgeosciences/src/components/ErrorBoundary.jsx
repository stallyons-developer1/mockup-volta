import { Component } from 'react'

// Keeps a WebGL (or any child) failure from taking down the whole page.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() { /* swallow — fallback handles UI */ }
  render() {
    if (this.state.failed) return this.props.fallback ?? null
    return this.props.children
  }
}
