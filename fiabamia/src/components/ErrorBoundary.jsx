import { Component } from 'react'

// Keeps a WebGL (or any child) failure from taking down the whole page.
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false } }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() {}
  render() { return this.state.failed ? (this.props.fallback ?? null) : this.props.children }
}
