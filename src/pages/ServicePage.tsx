import { useParams, Navigate } from 'react-router-dom'
import { getServiceBySlug, getServiceImage } from '@/data/services'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceCapabilities from '@/components/service/ServiceCapabilities'
import ServiceProcess from '@/components/service/ServiceProcess'
import ServiceOutcomes from '@/components/service/ServiceOutcomes'
import ServiceFAQ from '@/components/service/ServiceFAQ'
import ServiceCTA from '@/components/service/ServiceCTA'
import RelatedServices from '@/components/service/RelatedServices'

export default function ServicePage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/solutions" replace />

  return (
    <>
      <ServiceHero service={service} />
      <ServiceCapabilities capabilities={service.capabilities} image={getServiceImage(service)} name={service.name} />
      <ServiceProcess process={service.process} name={service.name} />
      <ServiceOutcomes outcomes={service.outcomes} />
      <ServiceFAQ faq={service.faq} />
      <RelatedServices service={service} />
      <ServiceCTA service={service} />
    </>
  )
}
